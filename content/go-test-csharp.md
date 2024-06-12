---
title: "Go-style “alongside” testing in C# and .Net Core"
date: 2024-06-12
---

I move between Go and C#, and one idiom I like in Go is tests living alongside the things they are testing, right in the same project. In addition to style preference, it (IMHO) more easily allows testing internal functions. In the .Net world, having a [separate test project](https://stackoverflow.com/questions/358196/c-sharp-internal-access-modifier-when-doing-unit-testing) is traditional.

To achieve the Go style in .Net, one must a) make the tests discoverable by a test runner, and b) optionally-but-desirably, ensure that the test files and frameworks don't get compiled into Release builds. 

This is configured in the `.csproj` file. If you'd like to cut to the chase, have a look at [this example](https://github.com/clipperhouse/uax29.net/blob/main/uax29/uax29.csproj).

### Details

To make the tests discoverable by the test runner, but only in Debug mode:

```
<PropertyGroup Condition="'$(Configuration)' != 'Release'">
  <IsTestProject>true</IsTestProject>
</PropertyGroup>
```

To exclude the test files from being compiled in the Release build, using a naming convention:

```
<ItemGroup Condition="'$(Configuration)' == 'Release'">
  <None Remove="*.Test.cs" />
  <Compile Remove="*.Test.cs" />
</ItemGroup>
```

To exclude the test frameworks (packages) from being compiled into the Release build:

```
<ItemGroup Condition="'$(Configuration)' != 'Release'">
  <PackageReference Include="coverlet.collector" Version="6.0.0" />
  <PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.8.0" />
  <PackageReference Include="NUnit" Version="4.1.0" />
  <PackageReference Include="NUnit.Analyzers" Version="3.9.0" />
  <PackageReference Include="NUnit3TestAdapter" Version="4.5.0" />
  <Using Include="NUnit.Framework" />
</ItemGroup>
```

The items will vary based on what frameworks & versions you are using, and of course you can choose your own naming conventions.

### Gut checks

For my project, I confirmed with ILSpy that NUnit does not appear in the Release binary, but does appear in the Debug binary. When running tests in Debug mode, I see all ~5800 tests, while in Release mode, I see no tests executed. I have not discovered any gotchas so far, but let me know if you do.