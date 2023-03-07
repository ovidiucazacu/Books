namespace Books.Models
{
    public class StudentEditRequest
    {
        public string Name { get; set; } = string.Empty;
        public int Code { get; set; }
        public int Classmate { get; set; }
        public string Gender { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public string Contact { get; set; } = string.Empty;
    }
}
