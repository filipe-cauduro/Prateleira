using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prateleira.Models
{
    public class Livro
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public int QtdPaginas { get; set; }
        public DateTime DtPubli { get; set; }
        public Editora Editora { get; set; }
        public int EditoraId { get; set; }

    }
}
