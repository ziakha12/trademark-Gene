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
        $message = $_POST["message"];
        $title = $_POST["title"];
        $company = $_POST["company"];
        $service = $_POST["service"];
        $project_bref = $_POST["project_bref"];
        $to = "info@trademarkgene.com";
        $subject = "New Contact Form Submission";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}\nTitle: {$title}\nCompany {$company}\nService {$service}\nProject Brief {$project_bref}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
    header('Location: https://trademarkgene.com/thankyou/index.html');
        } else {
            echo "Failed to send message.";
        }
    }
}
?>