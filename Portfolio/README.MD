# Projeto de Portfólio usando HTML e CSS

### Projeto avaliativo da disciplina de programação web.

Este projeto consiste na construção de um portifólio pessoal seguindo as diretrizes do documento fornecido pelo professor **André Olímpio** como método de avaliação da disciplina de *Programação Web*.

- Esse projeto utiliza apenas HTML e CSS em sua produção.
    - Dockerfile utilizado apenas pela conveiniência de teste, não é um critério definido pelo professor.
- Procurei seguir todos os requisitos indicados no [Documento Oficial.](docs/Atividade_Avaliativa_1.pdf)
    - [CHANGELOG.md](./CHANGELOG.md) para documentação das tarefas executadas até o lançamento do portifólio.

## Deploy da aplicação
```
docker build -t portfolio .
docker run -d -p 8080:80 portfolio
```

### referencias de estudo:
- [w3schools.com/html](https://www.w3schools.com/html/default.asp)
- [w3schools.com/css](https://www.w3schools.com/css/default.asp)