using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prateleira.Models
{
    public class AutorLivro
    {
        public int LivroId { get; set; }
        public int AutorId { get; set; }
        public Livro Livro { get; set; }
        public Autor Autor { get; set; }

    }
}
