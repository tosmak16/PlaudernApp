using AutoMapper;
using server.Dtos;
using server.Models;

namespace ChatApp.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<UserForRegDto, User>();
            CreateMap<User, UserDetailDto>();
            CreateMap<User, UserListDto>();


        }
    }
}