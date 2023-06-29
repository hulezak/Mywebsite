<?php
// Get the form data
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Validate the input data (you could add more validation here)
if (empty($username) || empty($email) || empty($password)) {
    die("Please fill in all fields.");
}

// Connect to the database (replace dbname, dbuser, and dbpass with your database credentials)
$db = new PDO('mysql:host=localhost;dbname=mydatabase', 'dbuser', 'dbpass');

// Check if email already exists in the database
$stmt = $db->prepare("SELECT COUNT(*) FROM users WHERE email = ?");
$stmt->execute([$email]);
if ($stmt->fetchColumn() > 0) {
    die("An account with that email address already exists.");
}
// Add the new user to the database
$stmt = $db->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->execute([$username, $email, md5($password)]);

// Redirect the user to the login page
header("Location: Gpt.html");
exit();
?>