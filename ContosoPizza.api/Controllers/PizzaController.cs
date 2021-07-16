using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ContosoPizza.Models;
using ContosoPizza.Services;

namespace ContosoPizza.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PizzaController : ControllerBase
    {
        public PizzaController()
        {
        }

        [HttpGet]
        public ActionResult<List<Pizza>> GetAll() =>
            PizzaService.GetAll();

        [HttpGet("{id}")]
        public ActionResult<Pizza> Get(int id)
        {
            var pizza = PizzaService.Get(id);

            if(pizza == null)
                return NotFound();

            return pizza;
        }

        [HttpPost("adicionar")]
        public IActionResult Create([FromBody] Pizza pizza)
        {            
            PizzaService.Add(pizza);
            return CreatedAtAction(nameof(Create), new { id = pizza.Id }, pizza);
        }

        [HttpPost("editar")]
        public IActionResult Update([FromBody] Pizza pizza)
        {
            
            var existingPizza = PizzaService.Get(pizza.Id);

            if(existingPizza is null)
                return NotFound();

            PizzaService.Update(pizza);

            return NoContent();

        }

        [HttpPost("deletar")]
        public IActionResult Delete([FromBody] int id)
        {
            var pizza = PizzaService.Get(id);

            if(pizza is null)
                return NotFound();
            
            PizzaService.Delete(id);

            return NoContent();
        }
    }
}