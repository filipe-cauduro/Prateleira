using Microsoft.EntityFrameworkCore;
using Prateleira.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Prateleira.Data
{
    public class PrateleiraContext : DbContext
    {
        public DbSet<Autor> Autores { get; set; }
        public DbSet<Livro> Livros { get; set; }
        public DbSet<AutorLivro> AutoresLivros { get; set; }
        public DbSet<Editora> Editoras { get; set; }

        public PrateleiraContext ()
        {}

        public PrateleiraContext(DbContextOptions<PrateleiraContext> options) : base(options)
        {}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Password=123456789;Persist Security Info=True;User ID=sa;Initial Catalog=PrateleiraApp;Data Source=Filipe-PC");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AutorLivro>(entity =>
            {
                entity.HasKey(e => new { e.AutorId, e.LivroId });
            });
        }
    }
}
