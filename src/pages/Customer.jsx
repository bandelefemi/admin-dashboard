import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Sort, 
  Selection, Filter, Page, Edit, Inject} from '@syncfusion/ej2-react-grids'

  import { customersData, customersGrid } from '../data/dummy'
  import { Header } from '../components'

const Customer = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Customers' />
      <GridComponent  
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowEditing: true, allowDeleting:true}}
      width='auto' >
        <ColumnsDirective>
          {customersGrid.map((item, index)=> (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Sort, Edit, Filter, Selection, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Customer
