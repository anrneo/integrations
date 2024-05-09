
export const queryGraphqlTotalIntegrations = (search: string) => {
  let paramsFilter = `page:1`
  paramsFilter =  search ? paramsFilter+`,filter:{
    _or:[
      {codigo:{_contains:"${search}"}},
      {nombre_integracion:{_contains:"${search}"}},
      {id_proyecto:{nombre:{_contains:"${search}"}}},
      {unidad_negocio:{pais:{nombre_pais:{_contains:"${search}"}}}},
      {unidad_negocio:{unidad_negocio:{nombre_uunn:{_contains:"${search}"}}}},
      {id_ficha_tecnica:{id_ambiente:{nombre:{_contains:"${search}"}}}},
      {sistema_origen:{codigo:{_contains:"${search}"}}},
      {sistema_destino:{codigo:{_contains:"${search}"}}},
    ]
  }` : paramsFilter;
  return `query{
    informacion_general_aggregated(${paramsFilter}){
      count{
        id
      }}}`

}
  export const queryGraphqlGeneralInfo = (search: string, page=1, limit=10) => {
  let paramsFilter = `limit:${limit},page:${page}`
  paramsFilter =  search ? paramsFilter+`,filter:{
    _or:[
      {codigo:{_contains:"${search}"}},
      {nombre_integracion:{_contains:"${search}"}},
      {id_proyecto:{nombre:{_contains:"${search}"}}},
      {unidad_negocio:{pais:{nombre_pais:{_contains:"${search}"}}}},
      {unidad_negocio:{unidad_negocio:{nombre_uunn:{_contains:"${search}"}}}},
      {id_ficha_tecnica:{id_ambiente:{nombre:{_contains:"${search}"}}}},
      {sistema_origen:{codigo:{_contains:"${search}"}}},
      {sistema_destino:{codigo:{_contains:"${search}"}}},
    ]
  }` : paramsFilter;

  return `
            query{
              informacion_general(${paramsFilter}){
                  id
                  codigo
                  nombre_integracion
                id_proyecto{
                    nombre
                }
                unidad_negocio{
                  bandera{
                    nombre_bandera
                  }
                  pais{
                      nombre_pais
                  }
                  unidad_negocio{
                    nombre_uunn
                  }
                }
                id_ficha_tecnica{
                  id_ambiente{
                    nombre
                    nombre_corto
                  }
                }
                sistema_origen{
                  codigo
                  nombre
                }
                sistema_destino{
                  codigo
                  nombre
                }
              }
            }
`
}

export const queryGraphqlGeneralInfoById = (id: string) => {
  return `
            query{
              informacion_general_by_id(id:${id}){
                  id
                  codigo
                  nombre_integracion
                  id_responsable{
                    nombre
                  }
                  id_plataforma_integracion{
                    nombre
                  }
                  id_servicio{
                    nombre
                  }
                id_proyecto{
                    nombre
                }
                unidad_negocio{
                  bandera{
                    nombre_bandera
                  }
                  pais{
                      nombre_pais
                  }
                  unidad_negocio{
                    nombre_uunn
                  }
                }
                id_ficha_tecnica{
                  id_ambiente{
                    nombre
                    nombre_corto
                  }
                  frecuencia
                }
                sistema_origen{
                  codigo
                  nombre
                }
                sistema_destino{
                  codigo
                  nombre
                }
              }
            }
`
}