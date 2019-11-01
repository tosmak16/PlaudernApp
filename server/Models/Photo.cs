using System;

namespace server.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public DateTime Created { get; set; }
        public bool IsDisplayPhoto { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}