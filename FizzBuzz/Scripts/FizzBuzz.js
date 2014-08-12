var FizzBuzz = FizzBuzz || {
    Initialize: function () {
        $("#SubmitButton").click(FizzBuzz.OnSubmitClicked);

        $('#LowerNumberInput').blur(FizzBuzz.OnInputBlurValidator);
        $('#HigherNumberInput').blur(FizzBuzz.OnInputBlurValidator);

        $('.Error').hide();

        FizzBuzz.ShowLoadingIndicator(false);
    },

    OnSubmitClicked: function () {
        // 0) Clear output
        $('#OutputContainer').html("");
        $('#SummaryContainer').html("");

        // 1) Read Lower Number
        var lowerNumber = $('#LowerNumberInput').val();

        // 2) Read Higher Number
        var higherNumber = $('#HigherNumberInput').val();

        // 3) Read Input Object Collection
        var inputData = $('#InputTextArea').val();

        if (FizzBuzz.IsValid()) {
            FizzBuzz.ShowLoadingIndicator(true);

            // 4) Make AJAX call.
            $.ajax({
                type: "POST",
                url: "Default.aspx/ExecFizzBuzz",
                data: JSON.stringify({
                    lowerNumber: lowerNumber,
                    higherNumber: higherNumber,
                    inputData: inputData
                }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: FizzBuzz.HandleExecFizzBuzzResponse
            });
        }
    },

    HandleExecFizzBuzzResponse: function (response) {
        var result = response.d,
            lowerNumber,
            higherNumber,
            resultLine;

        // 1) Clean up containers.
        $('#OutputContainer').html("");
        $('#SummaryContainer').html("");

        if (result) {
            lowerNumber = result.LowerNumber;
            higherNumber = result.HigherNumber;

            // 2) Process results.
            for (var i = 0; i < result.ResultLines.length; i++) {
                resultLine = result.ResultLines[i];
                FizzBuzz.ProcessResultLineRow(resultLine, lowerNumber, higherNumber);
            }

            $('#OutputContainer').tooltip({
                show: {
                    effect: "slideDown",
                    delay: 250
                },
                position: {
                    my: "right top",
                    at: "left top"
                },
                track: true
            });
        } else {
            window.alert("Ohh noo! Something went wrong.  Please try again.");
        }
        // 3) Hide loading screen.
        FizzBuzz.ShowLoadingIndicator(false);
    },

    ProcessResultLineRow: function (resultLine, lowerNumber, higherNumber) {
        var inputValue = resultLine.Value,
            fizz = resultLine.Fizz,
            buzz = resultLine.Buzz,
            isError = resultLine.Error,
            className = "",
            content = "",
            row;

        if (fizz || buzz) {
            if (fizz) {
                className += "fizz";
                content += "Fizz";
            }
            if (buzz) {
                className += "buzz";
                content += "Buzz";
            }
            row = $("<div></div>");
            row.addClass(className);
            row.html(content);
            row.attr('title', inputValue);

            $('#OutputContainer').append(row);
        }

        if (isError) {
            FizzBuzz.AddSummaryRow(inputValue + " - N/A.", "summary-break");
        } else {
            FizzBuzz.AddSummaryRow("Divided " + inputValue + " by " + lowerNumber + ": " + (fizz ? "Divisible" : "Not Divisible"), className);
            FizzBuzz.AddSummaryRow("Divided " + inputValue + " by " + higherNumber + ": " + (buzz ? "Divisible" : "Not Divisible"), className + " summary-break");
        }
    },

    AddSummaryRow: function (content, className) {
        var row = $("<div></div>");
        if (className != "") {
            row.addClass(className);
        }
        row.html(content);
        $('#SummaryContainer').append(row);
    },

    IsValid: function () {
        var isLowerNumberProvided = FizzBuzz.ValidateRequiredField('LowerNumberInput'),
            isHighNumberProvided = FizzBuzz.ValidateRequiredField('HigherNumberInput'),
            isdataCollectionProvided = FizzBuzz.ValidateRequiredField('InputTextArea');
        var isValid = isLowerNumberProvided && isHighNumberProvided && isdataCollectionProvided;
        if (isValid) {
            var isLowerNumberValid = FizzBuzz.ValidateNumericField('LowerNumberInput'),
			isHigherNumberValid = FizzBuzz.ValidateNumericField('HigherNumberInput');
            isValid = isLowerNumberValid && isHigherNumberValid;
        }
        return isValid;
    },

    OnInputBlurValidator: function () {
        var inputId = $(this).attr('id');
        FizzBuzz.ValidateNumericField(inputId);
    },

    ValidateRequiredField: function (inputId) {
        var value = $('#' + inputId).val(),
            isValid = true;
        if (value != '') {
            FizzBuzz.HideError(inputId);
        } else {
            isValid = false;
            FizzBuzz.ShowError(inputId, 'Field is required.');
        }
        return isValid;
    },

    ValidateNumericField: function (inputId) {
        var value = $('#' + inputId).val(),
		isValid = true;
        var isIntegerOk = $.isNumeric(value) && Math.floor(value) == value;
        if (isIntegerOk) {
            if (value != 0) {
                FizzBuzz.HideError(inputId);
            } else {
                isValid = false;
                FizzBuzz.ShowError(inputId, 'Division by zero is undefined.');
            }
        } else {
            isValid = false;
            FizzBuzz.ShowError(inputId, value + ' is not an integer value.');
        }
        return isValid;
    },

    ShowError: function (inputId, errorMessage) {
        $(".Error[for='" + inputId + "']").show();
        $(".Error[for='" + inputId + "']").html(errorMessage);
    },

    HideError: function (inputId) {
        $(".Error[for='" + inputId + "']").hide();
    },
    ShowLoadingIndicator: function (show) {
        if (show) {
            $('#LoadingIndicator').show();
        } else {
            $('#LoadingIndicator').hide();
        }
    }
};