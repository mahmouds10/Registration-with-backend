<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
    <link rel="stylesheet" href="css/form.css">
</head>

<body>
    <div class="container-fluied  form py-4">
        <div class="row m-0">
            <div class="signup">
                <div class="header col-9">
                    <h2>Create your account</h2>
                </div>
                <div class="form d-flex flex-column col-9 align-items-center">
                    <form class="col-12" action="" method="post" enctype="multipart/form-data">
                        <div class="inputs col-12 gap-2 d-flex flex-column align-items-center">
                            <div class="input position-relative col-12">
                                <label for="name">Full Name</label>
                                <input type="text" name="fullname" id="name" placeholder="Enter your name"
                                    class="col-7" />
                                <img id="v-name" class="valid-icon" src="imgs/download.svg" alt="" />
                                <img id="inv-name" class="invalid-icon" src="imgs/invalid.svg" alt="" />
                            </div>
                            <div class="input position-relative col-12">
                                <label for="userName">User Name</label>
                                <input type="text" name="username" id="username" placeholder="Enter your user name"
                                    class="col-7" />
                                <img id="v-userName" class="valid-icon" src="imgs/download.svg" alt="" />
                                <img id="inv-userName" class="invalid-icon" src="imgs/invalid.svg" alt="" />
                            </div>
                            <div class="input position-relative col-12">
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email" placeholder="Enter your email"
                                    class="col-7" />
                                <img id="v-mail" class="valid-icon" src="imgs/download.svg" alt="" />
                                <img src="imgs/invalid.svg" alt="" id="inv-mail" class="invalid-icon" alt="" />
                            </div>
                            <div class="input position-relative col-12">
                                <label for="pass">Password</label>
                                <input type="password" name="password" id="pass" placeholder="Enter your password"
                                    class="col-7" />
                                <button type="button" id="eye"><i class="fa-solid fa-eye"></i></button>
                                <button type="button" id="eye-slash">
                                    <i class="fa-solid fa-eye-slash"></i>
                                </button>
                                <img id="v-img" class="valid-icon-pass" src="imgs/download.svg" alt="" />
                                <img id="inv-img" class="invalid-icon-pass" src="imgs/invalid.svg" alt=""
                                    data-bs-placemen="top" data-bs-toggle="popover" data-bs-title="Password"
                                    data-bs-content="At least 8 chars 
                    At least 1 uppercase char
                    At least 1 number
                    At least 1 special character (!@#$%^)
                    No sapces ' '
                    " />
                                <span>Must be 8 characters at least</span>
                            </div>
                            <div class="input position-relative col-12">
                                <label for="repass">Confirm password</label>
                                <input type="password" name="confirmpassword" id="re-pass"
                                    placeholder="Confirm your password" class="col-7" />
                                <button type="button" id="eye-re"><i class="fa-solid fa-eye"></i></button>
                                <button type="button" id="eye-slash-re">
                                    <i class="fa-solid fa-eye-slash"></i>
                                </button>
                                <img id="rev-img" class="valid-icon" src="imgs/download.svg" alt="" />
                                <img id="reinv-img" class="invalid-icon" src="imgs/invalid.svg" alt="">
                            </div>
                            <div class="input position-relative col-12">
                                <label for="address">Address</label>
                                <input type="text" name="address" id="address" placeholder="Enter your adress"
                                    class="col-7" />
                                <img id="v-address" class="valid-icon" src="imgs/download.svg" alt="" />
                                <img id="inv-address" class="invalid-icon" src="imgs/invalid.svg" alt="" />
                            </div>
                            <div class="input position-relative col-12">
                                <label for="phone">Phone</label>
                                <input type="text" name="phone" id="phone" placeholder="Enter your Phone"
                                    class="col-7" />
                                <img id="v-phone" class="valid-icon" src="imgs/download.svg" alt="" />
                                <img id="inv-phone" class="invalid-icon" src="imgs/invalid.svg" alt="" />
                            </div>
                            <div class="input position-relative col-12 d-flex justify-content-between align-items-end">
                                <div class="input position-relative col-5 h-100">
                                    <label for="bd">Birthdate</label>
                                    <input id="bd" name="birthdate" type="date">
                                </div>
                                <div class="col-1">
                                    <button disabled id="search" class="position-relative" type="button">
                                        Who's else Birthdate
                                        <lord-icon src="https://cdn.lordicon.com/ybaojceo.json">
                                        </lord-icon>
                                    </button>

                                </div>
                                <div class="input position-relative col-5">
                                    <label for="photo">Personal Phote</label>
                                    <input type="file" name="phote" id="photo">
                                </div>
                            </div>
                        </div>
                        <div class="policies my-3 d-flex align-items-start">
                            <input class="form-check-input mt-0" type="checkbox" value="accept" id="polices"
                                aria-label="Checkbox for following text input" />
                            <label for="pol" class="d-none"></label>
                            <h6 class="mx-2">
                                By creating an account means you agree to the
                                <span>Terms and Conditions</span>, and our
                                <span>Privacy Policy</span>
                            </h6>
                        </div>
                        <div class="signup-btn col-12 d-flex justify-content-center">
                            <button type="submit" id="signup" class="w-50">Sign Up</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>


    <div id="layer" class="layer ">
    </div>


    <div id="side-menu" class="open position-fixed ">
        <div class="open-icon position-absolute">
            <label for="check">
                <input type="checkbox" value="checked" id="check" />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
        <div class="container min-vh-100 py-4">
            <div class="header position-relative">
                <h2 class="text-center">Actors were also born on this day</h2>
                <h2 class="text-center" id='thisDay'></h2>
                <button class="position-fixed top-0" id="close">Close</button>
            </div>

            <div id="actors-area" class="row gap-2  flex-column h-100">
                <h3 class="text-center my-5">Please select your birthdate and search</h3>
            </div>

        </div>
    </div>


    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <script type="module" src="js/validator.js"></script>
    <script type="module" src="js/API_Ops.js"></script>
</body>

</html>