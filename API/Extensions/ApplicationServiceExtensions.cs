using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Activities;
using Application.Core;
using Application.Interfaces;
using FluentValidation;
using FluentValidation.AspNetCore;
using Infrastructure.security;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, 
            IConfiguration config)
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddDbContext<DataContext>(opt => 
            {
                opt.UseNpgsql(config.GetConnectionString("DefaultConnection"));
            });
            services.AddCors(opt => 
            {
                opt.AddPolicy("_CorsPolicy", policy => {
                    policy.WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            services.AddFluentValidationAutoValidation();
            services.AddValidatorsFromAssemblyContaining<Create>();

            services.AddHttpContextAccessor();
            services.AddScoped<IUserAccessor,UserAccessor>();

            return services;
        }
    }
}