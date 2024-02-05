using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace chatgpt_empathy.Controllers;

[ApiController]
[Route("[controller]")]
public class FileUploadController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    public FileUploadController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpPost]
    [Route("Upload")]
    public async Task<IActionResult> Upload()
    {
        var request = Request;
        await Task.CompletedTask;

        return new OkResult();
    }
}
