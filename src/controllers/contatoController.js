const Contato = require('../models/ContatoModel');

exports.index = function (req, res) {
    res.render('contato', { contato: {} });
}

exports.register = async function (req, res) {
    try {
        const contato = new Contato(req.body);
        await contato.register();
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }
        req.flash('success', 'Mensagem enviada com sucesso');
        req.session.save(function () {
            return res.redirect('/');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }

}

exports.editIndex = async function (req, res) {
    if (!req.params.id) return res.render('404');
    const contato = await Contato.buscaPorId(req.params.id);
    if (!contato) return res.render('404');
    res.render('contato', { contato });
}
exports.edit = async function (req, res) {
    try {
        if (!req.params.id) return res.render('404');
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }
        req.flash('success', 'contato editado com sucesso');
        req.session.save(function () {
            return res.redirect(`/contato/index/${contato.contato._id}`);
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
}

exports.delete = async function (req, res) {
    if (!req.params.id) return res.render('404');
    const contato = await Contato.delete(req.params.id);
    if (!contato) return res.render('404');
    req.flash('success', 'contato apagado com sucesso');
    req.session.save(function () {
        return res.redirect('back');
    });
}