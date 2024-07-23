const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Adiciona o campo user
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
