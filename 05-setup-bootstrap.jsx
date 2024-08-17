Setup Project with Bootstrap:

1. Download and install bootstrap & bootstrap icons for project using NPM

		> npm  install  bootstrap  bootstrap-icons  --save


2. Link the following file to your webpage

 <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
 <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
 <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js">

  www.getbootstrap.com
  icons.getbootstrap.com

Ex: 
home.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>

    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">

        function Login(){
            return (
               <div className="d-flex justify-content-center">
                  <div>
                    <form className="border border-2 p-4 rounded rounded-2 mt-4 alert alert-dismissible">
                        <h2 className="bi bi-person-fill">User Login </h2>
                        <button type="button" data-bs-dismiss="alert" className="btn btn-close"> </button>
                        <dl>
                            <dt>User Name</dt> 
                            <dd> <input type="text" className="form-control" /> </dd>
                            <dt>Password</dt> 
                            <dd><input type="password" className="form-control" /> </dd>
                        </dl>
                        <button className="btn btn-warning w-100">Login </button>
                    </form>
                  </div>
               </div>
            )
        }

        ReactDOM.render( <section> <Login /> </section> , document.getElementById("root"));
    </script>
</head>
<body class="container-fluid">
    <noscript>Please enable JavaScript on your browser</noscript>
    <div id="root"></div>
</body>
</html>

Ex: Netflix


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix | Watch Movies</title>
    <style>
        body {
            background-size: cover;
        }
        .shade {
            background-color: rgba(0,0,0,0.4);
            height: 100vh;
        }
        .brand-title {
            color:red;
            font-size: 30px;
            font-weight: bold;
        }
        main {
            margin-top: 100px;
        }
    </style>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">

         function NetflixHeader(){
             return(
                <nav className="d-flex justify-content-between p-4">
                    <div className="brand-title"> NETFLIX </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="input-group">
                            <span className="bi bi-translate input-group-text"></span>
                            <select>
                                <option>English</option>
                                <option>हिंदी</option>
                            </select>
                            </div>    
                        </div>
                        <button className="btn ms-2  btn-danger">Sign In</button>
                    </div>
                </nav>
             )
         }

         function NetflixMain(){
            return(
                <main className="text-center text-white">
                    <div className="h1"> Unlimited movies, TV shows and more </div>
                    <div className="h4"> Watch anywhere. Cancel anytime. </div>
                    <div className="d-flex justify-content-center">
                        <NetflixRegister />
                    </div>
                </main>
            )
         }

         function NetflixRegister(){
            return(
                <div className="w-50 mt-4">
                    <p> Ready to watch? Enter your email to create or restart your membership. </p>
                    <div className="input-group input-group-lg">
                        <input type="email" placeholder="Your email address" className="form-control" />
                        <button className="btn btn-danger"> Get Started <span className="bi bi-chevron-right"></span> </button>
                    </div>
                </div>
            )
         }


          function NetflixIndex(){
             return(
                <div className="shade">
                    <header>
                        <NetflixHeader />    
                    </header>
                    <section className="text-white"> 
                        <NetflixMain />
                        
                    </section>
                </div>
             )
          }
          ReactDOM.render(<NetflixIndex />, document.getElementById("root"));
    </script>
</head>
<body background="./images/netflix-background.jpg">
    <noscript>Please enable JavaScript on your browser</noscript>
    <div id="root"></div>
</body>
</html>


Ex:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix | Watch Movies</title>
    <style>
        body {
            background-size: cover;
        }
        .shade {
            background-color: rgba(0,0,0,0.4);
            height: 100vh;
        }
        .brand-title {
            color:red;
            font-size: 30px;
            font-weight: bold;
        }
        main {
            margin-top: 100px;
        }
    </style>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    <script src="../node_modules/react/umd/react.development.js"></script>
    <script src="../node_modules/react-dom/umd/react-dom.development.js"></script>
    <script src="../node_modules/@babel/standalone/babel.js"></script>
    <script type="text/babel">

         function NetflixHeader(){
             return(
                <nav className="d-flex justify-content-between p-4">
                    <div className="brand-title"> <button data-bs-target="#menu" data-bs-toggle="offcanvas" className="btn bi bi-justify btn-light"></button> NETFLIX </div>
                    <div className="offcanvas offcanvas-start" id="menu">
                        <div className="offcanvas-header">
                            <h2>Netflix</h2>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul>
                                <li>Movies</li>
                                <li>TV Shows</li> 
                                <li>Membership</li> 
                                <li>Your Account</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="input-group">
                            <span className="bi bi-translate input-group-text"></span>
                            <select>
                                <option>English</option>
                                <option>हिंदी</option>
                            </select>
                            </div>    
                        </div>
                        <button className="btn ms-2  btn-danger">Sign In</button>
                    </div>
                </nav>
             )
         }

         function NetflixMain(){
            return(
                <main className="text-center text-white">
                    <div className="h1"> Unlimited movies, TV shows and more </div>
                    <div className="h4"> Watch anywhere. Cancel anytime. </div>
                    <div className="d-flex justify-content-center">
                        <NetflixRegister />
                    </div>
                </main>
            )
         }

         function NetflixRegister(){
            return(
                <div className="w-50 mt-4">
                    <p> Ready to watch? Enter your email to create or restart your membership. </p>
                    <div className="input-group input-group-lg">
                        <input type="email" placeholder="Your email address" className="form-control" />
                        <button className="btn btn-danger"> Get Started <span className="bi bi-chevron-right"></span> </button>
                    </div>
                </div>
            )
         }


          function NetflixIndex(){
             return(
                <div className="shade">
                    <header>
                        <NetflixHeader />    
                    </header>
                    <section className="text-white"> 
                        <NetflixMain />
                        
                    </section>
                </div>
             )
          }
          ReactDOM.render(<NetflixIndex />, document.getElementById("root"));
    </script>
</head>
<body background="./images/netflix-background.jpg">
    <noscript>Please enable JavaScript on your browser</noscript>
    <div id="root"></div>
</body>
</html>

