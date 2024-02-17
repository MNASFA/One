
import styles from './page.module.css'
import Image from 'next/image'

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
 
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
 
  
  return {
    title: product.title,
    description: product.description
  }
}

export default async function post({params}) {

  const product = await getData(params.id)

 

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
        <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageConatainer}>
            <Image
              src={product.thumbnail}
              alt='post image'
              className={styles.image}
              fill ={true}
            />

            <span  className={styles.autour}>{product.brand}</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.gallery}>
      {
        product.images.map( image => (
          <Image
            key={product.id}
            src={image}
            alt={product.title}
            width={200}
            height={200}

          />
        )

        )
      }
        </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti reiciendis temporibus, delectus velit eligendi facilis perferendis quisquam eaque ad modi officia quos veritatis, vero commodi, tempore laudantium rerum! Illum, tenetur?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio et quasi quod ipsam corporis, veniam magnam iste in hic ex aspernatur commodi recusandae reprehenderit blanditiis consequuntur reiciendis impedit quaerat error doloribus aliquid non qui obcaecati voluptate dicta? Iusto quis rerum adipisci provident quo laboriosam, nobis ipsum commodi sapiente voluptas quod numquam nostrum animi, quae accusantium temporibus exercitationem neque. Amet beatae totam assumenda ipsam nemo quidem doloremque soluta possimus, quasi id eaque alias maxime blanditiis ratione nihil? Harum adipisci dolor id exercitationem sit sed earum, iste nesciunt laborum excepturi enim quia delectus eaque aspernatur deserunt suscipit aliquid minima cum error ipsum quo distinctio officia. Eius pariatur odit rerum alias. Esse praesentium iusto libero, eum non ullam quidem exercitationem consequuntur, ea tempora quaerat eaque modi! Velit magnam itaque praesentium? Sunt hic eligendi molestias quia illo libero ex voluptatum nemo neque voluptatem id aperiam atque, quod nihil laudantium, cum nulla rerum iste exercitationem inventore itaque quae voluptate deserunt nostrum? Quas voluptas, reprehenderit blanditiis adipisci soluta quia, ipsum consequuntur nulla libero ratione incidunt atque est nostrum modi quam laborum ipsam, recusandae eos dignissimos unde. Corporis sint a, laboriosam ex recusandae in reiciendis? Fuga qui earum iure sed molestias odio vitae cupiditate veritatis sunt, necessitatibus ipsam debitis, voluptas deleniti iste hic laboriosam ut illo, error magni aliquid modi minima. Cumque explicabo eveniet laborum ad error ipsam harum, nesciunt quasi minima! Vitae animi consequuntur ipsa suscipit, facere quibusdam tenetur ex corrupti error! Modi voluptatem officiis distinctio rerum quam quia minima inventore harum odit, a ut! Laborum corporis placeat, soluta repudiandae impedit tempora facere nemo odio nihil in unde odit harum rerum architecto, excepturi cum, minus tempore enim deserunt consectetur provident aut! Itaque enim, possimus quaerat cupiditate accusantium labore, voluptatibus fugiat distinctio quasi doloribus optio ea at, repudiandae eum libero neque voluptate explicabo. Consectetur aliquam tempore, quasi, ea nisi, unde id ullam incidunt maxime voluptates vero. Rem deserunt nesciunt quia officia magni error placeat maxime ullam quis dolorum, tenetur, veniam neque quod ipsa distinctio reiciendis hic sint. Provident iste recusandae labore impedit tempore, veniam facere. Accusantium unde quas earum illo rem amet? Id animi vel autem facilis sunt recusandae et earum aspernatur nisi fuga. Optio quidem dolores iste dicta ab perspiciatis molestiae sed maxime reprehenderit odit porro ipsa ducimus incidunt exercitationem numquam error ratione veniam quae at, vel ex totam nisi fuga! Molestiae adipisci, culpa beatae quo minima inventore mollitia aut? Non magnam dolor eos quia molestias, quaerat, quae officiis, itaque voluptas deserunt nihil nostrum veritatis consectetur quo? Quas error necessitatibus voluptatem, temporibus modi saepe nesciunt commodi laudantium nemo totam, molestiae quod ratione numquam! Non modi molestiae consequatur aut pariatur praesentium numquam itaque facere, dicta earum iure totam. Deserunt accusamus quibusdam inventore molestiae laboriosam at perferendis accusantium quod rem totam pariatur ad dicta alias dignissimos labore vitae neque quidem consequuntur, veniam eos velit maxime voluptatem deleniti. Quos porro cumque voluptate soluta ipsa, quisquam dolores minima autem, deserunt quidem, tenetur nihil voluptas odit iste omnis. Laboriosam ratione soluta fugit? Asperiores dolores tempora adipisci quis non unde, error modi.
          </p>
        </div>
    </div>
  )
}
