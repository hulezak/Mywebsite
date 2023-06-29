
<?php

// Connect to the database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";
$conn = new mysqli($localhost, $username, $password, $dbname);
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);

// Get the form data
$username = $_POST["username"];
$password = $_POST["password"];
$confirm_password = $_POST["confirm_password"];
$email = $_POST["email"];

// Validate the form data
if (empty($username) || empty($password) || empty($confirm_password) || empty($email)) {
	die("Please fill out all fields.");
}
if ($password != $confirm_password) {
	die("Passwords do not match.");
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	die("Invalid email format.");
}

// Check if the username already exists
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
	die("Username already taken.");
}


// Hash the password
$password = password_hash($password, PASSWORD_DEFAULT);

// Insert the user into the database
$sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";
if ($conn->query($sql) === TRUE) {
	echo "Sign up successful!";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
header("Location: Books.html");
exit();

?>



    