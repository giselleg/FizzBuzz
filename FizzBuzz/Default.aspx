<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="FizzBuzz._Default" %>

<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">


    <style>
        .Error {
            display: inline;
            border: 1px solid red;
            background: #FFFFC0;
            margin: 20px;
            padding: 0px 10px;
        }

        .fizz {
            color: green;
            font-weight: bold
        }
        .buzz {
            color: blue;
            font-weight: bold
        }
        .fizzbuzz {
            color: purple;
            font-weight: bold
        }
        .summary-break {
            margin-bottom: 10px;
            border-bottom: 1px solid #CCC;
        }

        #LoadingIndicator {
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 1000;
        }

         #LoadingIndicator div {
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0.3;
            filter: alpha(opacity=30);
            background: #000;
        }
        .centered {
            position: fixed;
            top: 50%;
            left: 50%;
            margin-top: -25px;
            margin-left: -25px;
            width: 1px;
        }
    </style>

    <p>
        Lower Number: 
        <input id="LowerNumberInput" type="text" /><label for="LowerNumberInput" class="Error"></label>
    </p>
    <p>
        Higher Number: 
        <input id="HigherNumberInput" type="text" /><label for="HigherNumberInput" class="Error"></label>
    </p>
    <p>Input Object Collection:</p>
    <p>
        Allowed object separators :  Comma (,), White Space, Tabs and new line characters.
    </p>
    <textarea id="InputTextArea" cols="20" name="S1" rows="10"></textarea><label for="InputTextArea" class="Error"></label>
    <p>
        <input id="SubmitButton" type="button" value="Go FizzBuzz" />
    </p>
        <div id="LoadingIndicator" >
            <div></div>
            <img id="LoadingIndicatorImage" class="centered" src="http://ajaxload.info/cache/FF/FF/FF/0F/05/FF/27-1.gif" border="0"/>
        </div>
        <div id="OutputContainer"></div>
         <div id="SummaryContainer"></div>
    <p>
        &nbsp;
    </p>
    <p>
        &nbsp;
    </p>
    <script type="text/javascript">
        $(document).ready(function () {
            FizzBuzz.Initialize();
        });
    </script>

</asp:Content>
