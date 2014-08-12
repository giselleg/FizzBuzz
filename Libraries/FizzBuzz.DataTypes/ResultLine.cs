using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FizzBuzz.DataTypes
{
    /// <summary>
    /// 
    /// </summary>
    public class ResulLine
    {
        /// <summary>
        /// Gets or sets the value.
        /// </summary>
        /// <value>
        /// The value.
        /// </value>
        public string Value { get; set; }
        /// <summary>
        /// Gets or sets a value indicating whether this <see cref="ResulLine"/> is fizz.
        /// </summary>
        /// <value>
        ///   <c>true</c> if fizz; otherwise, <c>false</c>.
        /// </value>
        public bool Fizz { get; set; }
        /// <summary>
        /// Gets or sets a value indicating whether this <see cref="ResulLine"/> is buzz.
        /// </summary>
        /// <value>
        ///   <c>true</c> if buzz; otherwise, <c>false</c>.
        /// </value>
        public bool Buzz { get; set; }
        /// <summary>
        /// Gets or sets a value indicating whether this <see cref="ResulLine"/> is error.
        /// </summary>
        /// <value>
        ///   <c>true</c> if error; otherwise, <c>false</c>.
        /// </value>
        public bool Error { get; set; }
    }
}
