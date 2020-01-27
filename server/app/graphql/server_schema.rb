class ServerSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  use GraphQL::Analysis::AST
  # Opt in to the new runtime (default in future graphql-ruby versions)
  use GraphQL::Execution::Interpreter

  # Add built-in connections for pagination
  use GraphQL::Pagination::Connections

end
