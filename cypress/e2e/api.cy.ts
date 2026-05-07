type GetDepartmentsResponse = {
  departments: Department[];
  landings: Landing[];
  more_categories: MoreCategories;
  high_priority: HighPriority[];
};

type Department = {
  name: string;
  categories: Category[];
};

type Category = {
  id: string;
  name: string;
  permalink: string;
  children_categories: ChildrenCategory[];
};

type ChildrenCategory = {
  id: string;
  name?: string;
  permalink: string;
};

type Landing = {
  label: string;
  permalink: string;
};

type MoreCategories = {
  label: string;
  permalink: string;
};

type HighPriority = {
  label: string;
  permalink: string;
};

describe("API - Mercado Libre", () => {
  it("CT05 - Verificar que la lista de departamentos no esté vacía", () => {
    cy.fixture("apis").then((apis) => {
      cy.request({
        method: "GET",
        url: apis.mercadoLibre.departments,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.null;

        const data = response.body as GetDepartmentsResponse;

        expect(data.departments.length).greaterThan(0);
      });
    });
  });

  it("CT05.1 - La respuesta de la API debe ser rápida", () => {
    cy.fixture("apis").then((apis) => {
      cy.request({
        method: "GET",
        url: apis.mercadoLibre.departments}
      ).then(
        (response) => {
          expect(response.duration).to.be.lessThan(3000);
        },
      );
    });
  });
});
