using AutoMapper;
using server.Dtos;
using server.Models;

namespace server.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserForRegDto, User>();
            CreateMap<User, UserDetailDto>();
            CreateMap<User, UserListDto>().ForMember(dest => dest.Age, opt =>
            {
                opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
            });


        }
    }
}