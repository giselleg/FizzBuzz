using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using FizzBuzz.DataTypes;

namespace FizzBuzz
{
	public partial class _Default : Page
	{
		protected void Page_Load( object sender, EventArgs e )
		{
		}

		[WebMethod]
		public static FizzBuzzResponse ExecFizzBuzz( string lowerNumber, string higherNumber, string inputData )
		{
			var lowerNumberValue = lowerNumber.ParseInt();
			var higherNumberValue = higherNumber.ParseInt();

			var response = new FizzBuzzResponse()
				{
					LowerNumber = lowerNumberValue,
					HigherNumber = higherNumberValue
				};

			var objectCollectionList = inputData.Split( new[] {' ', ',', '\n', '\r', '\t'}, StringSplitOptions.RemoveEmptyEntries );

			var resultLines = objectCollectionList.Select( iter =>
				{
					var resultLine = new ResulLine()
						{
							Value = iter
						};

					if ( lowerNumberValue != 0 && higherNumberValue != 0 )
					{
						int value;
						if ( int.TryParse( iter, out value ) )
						{
							resultLine.Fizz = value % lowerNumberValue == 0;
							resultLine.Buzz = value % higherNumberValue == 0;
						}
						else
						{
							// input was not an integer
							resultLine.Error = true;
						}
					}
					else
					{
						// lower or higher numbers were invalid
						resultLine.Error = true;
					}
					return resultLine;

				} ).ToArray();

			response.ResultLines = resultLines;
			return response;
		}
	}
}