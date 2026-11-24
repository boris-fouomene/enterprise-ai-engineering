# Technology profiles

The following are suggested gate recipes, not automatically executed configurations. Choose only commands appropriate to the actual project. Install and configure tools separately. Use executable names available on the host; Windows may require explicit executable paths or runtime entry points.

| Ecosystem | Example checks |
|---|---|
| TypeScript / JavaScript | TypeScript compiler, ESLint, project tests |
| Python | Ruff, mypy, pytest |
| Java / Kotlin | Maven or Gradle verify, configured static analysis |
| PHP | PHPStan, PHPUnit, Composer audit |
| C# / .NET | dotnet build, dotnet test |
| Go | go vet, go test |
| Rust | cargo fmt --check, cargo clippy, cargo test |
| Dart / Flutter | dart analyze, flutter test |
| C / C++ | CMake build, CTest, clang-tidy |
| Ruby | RuboCop, project tests |
| Swift | swift build, swift test |
| SQL | SQLFluff, migration and integration tests |
| Infrastructure | Terraform validate, policy and configuration scans |
| Any other ecosystem | Project-defined executable gates |

Every profile uses the same policy schema. These recipes are recommendations; they are not tested integrations or a claim of complete ecosystem coverage.
