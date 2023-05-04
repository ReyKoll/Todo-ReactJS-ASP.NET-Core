namespace TodoAPI.Data.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string? Label { get; set; }
        public bool? IsDone { get; set; }
    }
}
