using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace f1history.Controllers 
{
    [ApiController]
    [Route("[controller]")]
    public class SeasonController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<Season>> Get() 
        {            
            var seasonList = new List<Season> {
                new Season { Year = 1993, Champion = "Alain Prost" },
                new Season { Year = 1994, Champion = "Michael Schumacher" }
            };

            return seasonList;
        }       
    }
}