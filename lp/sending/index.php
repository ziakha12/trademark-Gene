<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['name'])
        && !empty($_POST['email'])
    ){
            print_r('ss');

        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $project_bref = $_POST["project_bref"];
        $to = "info@trademarkgene.com";
        $subject = $_POST["subject"];"";
        // $subject = "New Contact Form Submission LP";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nProject Brief {$project_bref}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
    header('Location: https://trademarkgene.com/lp/thankyou.html');
        } else {
            echo "Failed to send message.";
        }
    }
}
?> 