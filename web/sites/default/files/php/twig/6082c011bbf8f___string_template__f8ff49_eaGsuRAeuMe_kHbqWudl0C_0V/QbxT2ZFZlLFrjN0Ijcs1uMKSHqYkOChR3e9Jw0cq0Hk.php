<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* __string_template__f8ff495a8d1d693aade52a59d700cdc553cd0a9d5f44ee8a11ea58baeacc6b13 */
class __TwigTemplate_97a8c65f63ebd2703423df006587a49b76944f20e83c785080c9a2b90235f914 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<div class=\"staff\">
  <div class=\"staff__image\">
    ";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_photo_staff"] ?? null), 3, $this->source), "html", null, true);
        echo "
  </div>
  <div class=\"staff__name\">
    ";
        // line 6
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_staff_name"] ?? null), 6, $this->source), "html", null, true);
        echo "
  </div>
  <div class=\"staff__position\">
    ";
        // line 9
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_staff_position"] ?? null), 9, $this->source), "html", null, true);
        echo "
  </div>
</div>";
    }

    public function getTemplateName()
    {
        return "__string_template__f8ff495a8d1d693aade52a59d700cdc553cd0a9d5f44ee8a11ea58baeacc6b13";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 9,  49 => 6,  43 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}<div class=\"staff\">
  <div class=\"staff__image\">
    {{ field_photo_staff }}
  </div>
  <div class=\"staff__name\">
    {{ field_staff_name }}
  </div>
  <div class=\"staff__position\">
    {{ field_staff_position }}
  </div>
</div>", "__string_template__f8ff495a8d1d693aade52a59d700cdc553cd0a9d5f44ee8a11ea58baeacc6b13", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 3);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
