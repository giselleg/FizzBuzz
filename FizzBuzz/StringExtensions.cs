using System;

namespace FizzBuzz
{
	public static class StringExtensions
	{
		public static int ParseInt( this String str )
		{
			int value = 0;
			if ( !string.IsNullOrEmpty( str ) )
			{
				int.TryParse( str, out value );

			}
			return value;
		}
	}
}