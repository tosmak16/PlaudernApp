FROM microsoft/dotnet:latest

WORKDIR /usr/src/app/

COPY /server/ .

RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]
EXPOSE 5000

COPY scripts/entrypoint.sh /usr/src/app/scripts/entrypoint.sh

RUN ["chmod", "+x", "/usr/src/app/scripts/entrypoint.sh"]
CMD /bin/bash ./scripts/entrypoint.sh