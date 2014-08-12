using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FizzBuzz.DataTypes
{
    /// <summary>
    /// 
    /// </summary>
    public class FizzBuzzResponse
    {
        /// <summary>
        /// Gets or sets the result lines.
        /// </summary>
        /// <value>
        /// The result lines.
        /// </value>
        public ResulLine[] ResultLines { get; set; }
        /// <summary>
        /// Gets or sets the lower number.
        /// </summary>
        /// <value>
        /// The lower number.
        /// </value>
        public int LowerNumber { get; set; }
        /// <summary>
        /// Gets or sets the higher number.
        /// </summary>
        /// <value>
        /// The higher number.
        /// </value>
        public int HigherNumber { get; set; }
    }
}
