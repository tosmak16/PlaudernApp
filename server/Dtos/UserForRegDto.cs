using System;
using System.ComponentModel.DataAnnotations;

namespace server.Dtos
{
    public class UserForRegDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 8, ErrorMessage = "You must specify a password with at least 4 characters")]
        public string Password { get; set; }

        [Required]
        public string Gender { get; set; }


        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }

        public UserForRegDto()
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }

}