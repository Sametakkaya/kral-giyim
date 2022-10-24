import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <div className='kategori-konteynırı'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {/* <img src="" alt="" /> */}
      <div className='kategori-gövde-konteynırı'>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  )
}

export default CategoryItem
