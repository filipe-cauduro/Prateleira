using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Prateleira.Data;
using Prateleira.Models;

namespace Prateleira.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AutoresLivrosController : ControllerBase
    {
        private readonly PrateleiraContext _context;

        public AutoresLivrosController(PrateleiraContext context)
        {
            _context = context;
        }

        // GET: api/AutoresLivros
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AutorLivro>>> GetAutoresLivros()
        {
            return await _context.AutoresLivros.ToListAsync();
        }

        // GET: api/AutoresLivros/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AutorLivro>> GetAutorLivro(int id)
        {
            var autorLivro = await _context.AutoresLivros.FindAsync(id);

            if (autorLivro == null)
            {
                return NotFound();
            }

            return autorLivro;
        }

        // PUT: api/AutoresLivros/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAutorLivro(int id, AutorLivro autorLivro)
        {
            if (id != autorLivro.AutorId)
            {
                return BadRequest();
            }

            _context.Entry(autorLivro).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AutorLivroExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AutoresLivros
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AutorLivro>> PostAutorLivro(AutorLivro autorLivro)
        {
            _context.AutoresLivros.Add(autorLivro);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AutorLivroExists(autorLivro.AutorId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAutorLivro", new { id = autorLivro.AutorId }, autorLivro);
        }

        // DELETE: api/AutoresLivros/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AutorLivro>> DeleteAutorLivro(int id)
        {
            var autorLivro = await _context.AutoresLivros.FindAsync(id);
            if (autorLivro == null)
            {
                return NotFound();
            }

            _context.AutoresLivros.Remove(autorLivro);
            await _context.SaveChangesAsync();

            return autorLivro;
        }

        private bool AutorLivroExists(int id)
        {
            return _context.AutoresLivros.Any(e => e.AutorId == id);
        }
    }
}
