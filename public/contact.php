<?php
/**
 * お問い合わせフォームの送信処理。
 * React 側（lib/useContactForm.ts）から FormData を POST し、JSON で結果を返す。
 * DB には保存せず、$to 宛にメールを送るだけ。
 */

header('Content-Type: application/json; charset=UTF-8');

/** 通知メールの宛先 */
$to = 'info@rt-solutions.co.jp';

/** JSON を返して終了する */
function respond(int $code, array $payload): void {
    http_response_code($code);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => '不正なリクエストです。']);
}

/** FormData の値を取り出して前後の空白を落とす */
function field(string $key): string {
    return trim((string)($_POST[$key] ?? ''));
}

// ハニーポット（人間には見えない入力欄）が埋まっていたらボット。
// 相手に気づかせないため成功として返し、メールは送らない。
if (field('website') !== '') {
    respond(200, ['ok' => true]);
}

$name       = field('name');
$kana       = field('kana');
$company    = field('company');
$dept       = field('dept');
$email      = field('email');
$tel        = field('tel');
$prefecture = field('prefecture');
$subject    = field('subject');
$budget     = field('budget');
$message    = field('message');
$privacy    = field('privacy');
$formName   = field('form_name') !== '' ? field('form_name') : 'お問い合わせ';

// 必須項目
foreach (['お名前' => $name, 'メールアドレス' => $email, 'お問い合わせ種別' => $subject, 'お問い合わせ内容' => $message] as $label => $value) {
    if ($value === '') {
        respond(400, ['ok' => false, 'error' => "{$label}を入力してください。"]);
    }
}

if ($privacy === '') {
    respond(400, ['ok' => false, 'error' => 'プライバシーポリシーへの同意が必要です。']);
}

// 文字数の上限
$maxLengths = [
    'name'       => 30,
    'kana'       => 30,
    'company'    => 100,
    'dept'       => 50,
    'email'      => 50,
    'tel'        => 20,
    'prefecture' => 20,
    'subject'    => 100,
    'budget'     => 50,
    'message'    => 1500,
];

foreach ($maxLengths as $key => $max) {
    if (mb_strlen(field($key), 'UTF-8') > $max) {
        respond(400, ['ok' => false, 'error' => "入力が長すぎます（{$key}は{$max}文字以内）。"]);
    }
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['ok' => false, 'error' => 'メールアドレスの形式が正しくありません。']);
}

// 電話番号は数字・ハイフン・括弧・＋のみ（任意項目のため空欄は許可）
if ($tel !== '' && !preg_match('/^[0-9+\-() ]+$/', $tel)) {
    respond(400, ['ok' => false, 'error' => '電話番号の形式が正しくありません。']);
}

// メールヘッダーに改行が混ざる攻撃を防ぐ
foreach ([$name, $email, $subject] as $headerValue) {
    if (preg_match('/[\r\n]/', $headerValue)) {
        respond(400, ['ok' => false, 'error' => '入力に使用できない文字が含まれています。']);
    }
}

$body = <<<EOT
【ホームページからのお問い合わせ】

送信元フォーム: {$formName}

お名前: {$name}
ふりがな: {$kana}
会社名・組織名: {$company}
部署名・役職: {$dept}
メールアドレス: {$email}
電話番号: {$tel}
都道府県: {$prefecture}
お問い合わせ種別: {$subject}
ご予算・規模感: {$budget}

お問い合わせ内容:
{$message}
EOT;

$headers  = "From: {$email}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8";

mb_language('Japanese');
mb_internal_encoding('UTF-8');

if (mb_send_mail($to, "【お問い合わせ】{$subject}", $body, $headers)) {
    respond(200, ['ok' => true]);
}

respond(500, ['ok' => false, 'error' => '送信に失敗しました。時間をおいて再度お試しください。']);
