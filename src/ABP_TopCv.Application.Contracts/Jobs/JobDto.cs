using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABP_TopCv.Job
{
    public class JobDto
    {
        [Required]
        public string name { get; set; }
        public string description { get; set; }
        public string status { get; set; }

        [DataType(DataType.Date)]
        public DateTime startDate { get; set; }
        [DataType(DataType.Date)]
        public DateTime endDate { get; set; }


    }
}
