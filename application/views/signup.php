<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <title>Signup</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 400px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        h2 {
            text-align: center;
            color: #333;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #666;
        }

        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        input[type="submit"] {
            background-color: #007BFF;
            color: #fff;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 3px;
            font-size: 16px;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .error {
            color: #ff0000;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Signup</h2>
        <?php echo validation_errors('<p class="error">', '</p>'); ?>
        <?php echo form_open('welcome/process_signup'); ?>
        
        <label for="username">Username:</label>
        <input type="text"   class="form-control" name="username" style ="width:80%"value="<?php echo set_value('username'); ?>" required>
        
        <label for="password">Password:</label>
        <input type="password"   class="form-control" name="password" style ="width:80%" required>
        
        <label for="confirm_password">Confirm Password:</label>
        <input type="password"  class="form-control" name="confirm_password"  style ="width:80%" required>
        
        <input type="submit" value="Signup">
		<a href="..">
    <input type="button" value="Login" class="btn btn-primary" style="float:right">
</a>
        <?php echo form_close(); ?>
    </div>
</body>
</html>
