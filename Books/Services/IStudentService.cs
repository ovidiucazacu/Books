using Books.Models;

namespace Books.Services.StudentService
{
    public interface IStudentService
    {
        Task<List<Student>> GetStudentsAsync();
        Task<Student?> GetStudentAsync(Guid uid);
        Task<List<Student>> AddStudentAsync(Student request);
        Task<List<Student>?> UpdateStudentAsync(Guid uid, Student request);
        Task<List<Student>?> DeleteStudentAsync(Guid uid);
    }
}