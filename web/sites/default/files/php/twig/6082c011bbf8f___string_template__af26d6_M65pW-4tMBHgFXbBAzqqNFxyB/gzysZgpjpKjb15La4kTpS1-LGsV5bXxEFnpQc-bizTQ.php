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

/* __string_template__af26d6b6da5cb18f72272fc25abd81cf8c8b27314a2def7149aeb616daaabe2b */
class __TwigTemplate_ed3b1d55fd46ae1472bee53e98a94825d28e7c7783d60a834fda32ef87826d94 extends \Twig\Template
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
  <div class=\"staff__bottom\">
    <div class=\"staff__name\">
      ";
        // line 7
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_staff_name"] ?? null), 7, $this->source), "html", null, true);
        echo "
    </div>
    <div class=\"staff__position\">
      ";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_staff_position"] ?? null), 10, $this->source), "html", null, true);
        echo "
    </div>
  </div>
</div>
";
        // line 14
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["view_node"] ?? null), 14, $this->source), "html", null, true);
    }

    public function getTemplateName()
    {
        return "__string_template__af26d6b6da5cb18f72272fc25abd81cf8c8b27314a2def7149aeb616daaabe2b";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  63 => 14,  56 => 10,  50 => 7,  43 => 3,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}<div class=\"staff\">
  <div class=\"staff__image\">
    {{ field_photo_staff }}
  </div>
  <div class=\"staff__bottom\">
    <div class=\"staff__name\">
      {{ field_staff_name }}
    </div>
    <div class=\"staff__position\">
      {{ field_staff_position }}
    </div>
  </div>
</div>
{{ view_node }}", "__string_template__af26d6b6da5cb18f72272fc25abd81cf8c8b27314a2def7149aeb616daaabe2b", "");
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
