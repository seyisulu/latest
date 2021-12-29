<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>
            error
    </title>
    <link href="https://fonts.googleapis.com/css?family=Cabin:400,700" rel="stylesheet">

    <style>
        * {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }

        body {
            padding: 0;
            margin: 0;
        }

        #notfound {
            position: relative;
            height: 100vh;
        }

        #notfound .notfound {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }

        .notfound {
            max-width: 460px;
            width: 100%;
            text-align: center;
            line-height: 1.4;
        }

        .notfound .notfound-404 {
            position: relative;
            width: 180px;
            height: 180px;
            margin: 0px auto 50px;
        }

        .notfound .notfound-404>div:first-child {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: #ffa200;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            border: 5px dashed #000;
            border-radius: 5px;
        }

        .notfound .notfound-404>div:first-child:before {
            content: '';
            position: absolute;
            left: -5px;
            right: -5px;
            bottom: -5px;
            top: -5px;
            -webkit-box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.1) inset;
            box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.1) inset;
            border-radius: 5px;
        }

        .notfound .notfound-404 h1 {
            font-family: 'Cabin', sans-serif;
            color: #000;
            font-weight: 700;
            margin: 0;
            font-size: 90px;
            position: absolute;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            left: 50%;
            text-align: center;
            height: 40px;
            line-height: 40px;
        }

        .notfound h2 {
            font-family: 'Cabin', sans-serif;
            font-size: 33px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 7px;
        }

        .notfound p {
            font-family: 'Cabin', sans-serif;
            font-size: 16px;
            color: #000;
            font-weight: 400;
        }

        .notfound a {
            font-family: 'Cabin', sans-serif;
            display: inline-block;
            padding: 10px 25px;
            background-color: #8f8f8f;
            border: none;
            border-radius: 40px;
            color: #fff;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            -webkit-transition: 0.2s all;
            transition: 0.2s all;
        }

        .notfound a:hover {
            background-color: #2c2c2c;
        }

        .mt-2{
            margin-top: 20px;
        }

    </style>


</head>


<body>
<div id="notfound">
    <div class="notfound">
        <div class="notfound-404">
            <div></div>
            <h1>1738</h1>
        </div>
        <h2>Page not found</h2>
        <p>You are not supposed to view this page, please go back to dashboard.</p>

        @switch( Auth::user()->usertype )
            @case('user')
                <a href="/home"  title="Return to dashboard">Dashboard</a>
                @break
            @case('admin')
                <a href="/admin_dashboard"  title="Return to dashboard">Dashboard</a>
                @break
            @case('hod')
                <a href="/hod_dashboard"  title="Return to dashboard">Dashboard</a>
                @break
            @case('hr')
                <a href="/hr_dashboard"  title="Return to dashboard">Dashboard</a>
                @break
            @case('supervisor')
                <a href="/supervisor_dashboard"  title="Return to dashboard">Dashboard</a>
                @break       
            @default
                please log out
        @endswitch


        <div>
            <a href="{{ route('logout') }}" onclick="event.preventDefault();
         document.getElementById('logout-form').submit();" class="mt-2">
                {{ __('Logout') }}
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST"
                class="d-none">
                @csrf
            </form>
        </div>
    </div>
</div>




</body>

</html>

