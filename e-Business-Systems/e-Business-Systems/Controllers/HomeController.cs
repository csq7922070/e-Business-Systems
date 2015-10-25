using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace e_Business_Systems.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return Redirect("~/pages/dist/html/index.html");

            //ViewBag.Title = "Home Page";

            //return View();
        }
    }
}
