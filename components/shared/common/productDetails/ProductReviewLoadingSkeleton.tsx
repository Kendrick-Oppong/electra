

const ProductReviewLoadingSkeleton = () => {
  return (
   <section className="animate-pulse">
  <div>
    <div>
      <div className="flex justify-between items-center font-semibold bg-accent text-primary">
        <div className="border-gray h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
        <div className="border-gray h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
      </div>
    </div>
  </div>
  <div className="text-lg">
    <div className="my-3">
      <div className="border-gray h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mt-1"></div>
      <div className="border-gray h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3 mt-2"></div>
     
    </div>
  
  </div>
</section>
  )
}

export default ProductReviewLoadingSkeleton