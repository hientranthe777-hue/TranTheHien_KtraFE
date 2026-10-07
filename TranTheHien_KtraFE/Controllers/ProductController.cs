using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TranTheHien_KtraFE.Models;

namespace TranTheHien_KtraFE.Controllers
{
    public class ProductController : Controller
    {
        
        public ActionResult Index()
        {
            Product mockProduct = new Product
            {
                Id = 1,
                Name = "Lon Sữa Glucerna 800g/lon - Tặng 2 gói dùng thử",
                Price = 1034550,
                ImageUrl = "/images/glucerna.png", 
                Quantity = 1
            };

            return View(mockProduct); 
        }
    }
}