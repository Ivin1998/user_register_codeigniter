<html>
<head>
 <link rel="stylesheet" href="../ci/assets/css/indexbootstrap.css">
    <link rel="stylesheet" href="../ci/assets/css/styles.css"> 
     <link rel="stylesheet" href="../ci/assets/css/bootstrapmin.css" />
    <link rel="stylesheet" href="../ci/assets/css/formbootstrap.css">
    <link rel="stylesheet" href="../ci/assets/css/styles.css">
    <link rel="stylesheet" href="../ci/assets/css/style_sidebar.css">
</head>
<body class="index_page">
    <title>User Application</title>
    <div class="row" style="width:100%">
        <div class="col-md-2">
        </div>
        <div class="col-md-10">
            <div class="col-md-6">
                <h1 class="intro_page"><B>User Application</B></h1>
                <h3 style="line-height: 1.6;">This application helps you to add, remove, modify the users' data.
                    Also, allows to upload/download and view them.</h3>
            </div>
            <div class="col-md-6">
                <div style="padding-top:20%; width:100%;font-size:20">
                    <form method="post" class="login" action="<?php echo site_url('welcome/records_page') ?>">
                        <label style="text-align:left">Email</label>
                        <input type="text" name="user_name" placeholder="Enter your email"
                            class="form-control input"><br>
                        <label style="text-align:left">Password</label>
                        <div class="password-wrapper">
                            <input type="password" name="password" placeholder="Enter your Password" id="myInput"
                                class="form-control input">
                            <i class="fa fa-eye-slash" id="toggle-password" style="font-size: 15;"></i>
                        </div>
                        <button type="submit" name="submit" class="btn-lg btn-success loginnew">Log in</button>
                        <a href="login_users/forgot_password.php" id="forgot">
                            <h5 style="color:blue">Forgot Password?</h5>
                        </a>
                        <hr style="height:2px;border-width:thin">
                        <a href="<?php echo site_url('welcome/signup') ?>" class="btn-lg btn-secondary" style='text-decoration:none'>Create new account</a>
                    </form>
                </div>
            </div>
            <script>
                /* View passwords */
                const passwordInput = document.getElementById('myInput');
                const togglePassword = document.getElementById('toggle-password');

                togglePassword.addEventListener('click', function () {
                    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                    passwordInput.setAttribute('type', type);
                    togglePassword.classList.toggle('fa-eye-slash');
                    togglePassword.classList.toggle('fa-eye');

                });
            </script>
        </div>
    </div>
    </div>
    </div>
</body>

</html>
