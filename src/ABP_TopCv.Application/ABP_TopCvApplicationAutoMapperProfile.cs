using AutoMapper;
using ABP_TopCv.Books;

namespace ABP_TopCv;

public class ABP_TopCvApplicationAutoMapperProfile : Profile
{
    public ABP_TopCvApplicationAutoMapperProfile()
    {
        CreateMap<Book, BookDto>();
        CreateMap<CreateUpdateBookDto, Book>();
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
    }
}
