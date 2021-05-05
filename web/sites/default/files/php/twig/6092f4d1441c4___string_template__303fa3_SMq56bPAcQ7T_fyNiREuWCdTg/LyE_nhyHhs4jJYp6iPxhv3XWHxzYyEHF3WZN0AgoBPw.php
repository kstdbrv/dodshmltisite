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

/* __string_template__303fa39c8fbd33c211f04da5d37098cbf001af11e633f848ab2013f6b32d6701 */
class __TwigTemplate_39af60e9b305ef4873cfb38fc7d443e10e4beb52fbdc02b4f64d949e094a21f2 extends \Twig\Template
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
        echo "destination=/photo-gallery/%25D0%25B4%25D0%25B5%25D0%25BD%25D1%258C%25D0%25B7%25D0%25BD%25D0%25B0%25D0%25BD%25D0%25B8%25D0%25B9";
    }

    public function getTemplateName()
    {
        return "__string_template__303fa39c8fbd33c211f04da5d37098cbf001af11e633f848ab2013f6b32d6701";
    }

    public function getDebugInfo()
    {
        return array (  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}destination=/photo-gallery/%25D0%25B4%25D0%25B5%25D0%25BD%25D1%258C%25D0%25B7%25D0%25BD%25D0%25B0%25D0%25BD%25D0%25B8%25D0%25B9", "__string_template__303fa39c8fbd33c211f04da5d37098cbf001af11e633f848ab2013f6b32d6701", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
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
