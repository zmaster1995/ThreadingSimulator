FROM microsoft/aspnetcore:2.0-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0-nanoserver-1709 AS build
WORKDIR /src
COPY ThreadingSimulatorServer/ThreadingSimulatorServer.csproj ThreadingSimulatorServer/
RUN dotnet restore ThreadingSimulatorServer/ThreadingSimulatorServer.csproj
COPY . .
WORKDIR /src/ThreadingSimulatorServer
RUN dotnet build ThreadingSimulatorServer.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish ThreadingSimulatorServer.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "ThreadingSimulatorServer.dll"]
