import NotFoundStyles from './NotFound.module.css';

export const NotFound = () => {
  return (
    <section className={NotFoundStyles.content}> 
      <h1 className={NotFoundStyles.title}>Page not found</h1>
    </section>
  )
}